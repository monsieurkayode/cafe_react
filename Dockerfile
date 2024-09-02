FROM ruby:2.6.7

# Set the working directory
RUN mkdir -p /cafe-react
WORKDIR /cafe-react

# Install dependencies
RUN apt-get update -qq && apt-get install -y \
    postgresql-client \
    libssl-dev \
    libreadline-dev \
    zlib1g-dev \
    build-essential \
    curl

# Install rbenv
RUN git clone https://github.com/rbenv/rbenv.git ~/.rbenv && \
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc && \
    echo 'eval "$(rbenv init -)"' >> ~/.bashrc && \
    git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build && \
    echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc

# Install the specified Ruby version using rbenv
ENV PATH="/root/.rbenv/bin:/root/.rbenv/shims:$PATH"
RUN rbenv install 2.6.7 && rbenv local 2.6.7

# Install node 18 as specified in the package manager
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt update && apt install -y nodejs

# Install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt update && apt install yarn

# Copy the Gemfile and Gemfile.lock
COPY Gemfile /cafe-react/Gemfile
COPY Gemfile.lock /cafe-react/Gemfile.lock

# Install Gems dependencies
RUN bundle install

COPY . /cafe-react

# Install react dependencies
RUN gem install foreman
RUN rails yarn:install

EXPOSE 3000

# Start the main process
CMD ["foreman", "start", "-f", "Procfile"]
