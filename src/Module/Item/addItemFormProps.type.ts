export type AddItemFormProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
    placeholder: string;
    buttonText: string;
    disabled: boolean;
  };