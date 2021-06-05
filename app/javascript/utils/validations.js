export const formFields = [
  {
    field: 'type',
    required: true,
    placeholder: "Select menu type...",
    control: 'dropdown'
  },
  {
    field: 'name',
    required: true,
    placeholder: "Enter menu name...",
    control: 'input'
  },
  {
    field: 'price',
    required: true,
    placeholder: "Enter price...",
    control: 'input',
    format: (value) => value.replace(/[^0-9\.]/, "")
  },
  {
    field: 'photoUrl',
    required: false,
    placeholder: "Choose Photo",
    control: 'button',
    label: "photo"
  }
];
