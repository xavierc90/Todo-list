import { AddItemFormProps } from "../../Module/Item/addItemFormProps.type";
  
  export const AddItemForm: React.FC<AddItemFormProps> = ({ value, onChange, onAdd, placeholder, buttonText, disabled }) => {
    return (
      <div className='mt-5 flex gap-4'>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className='rounded-lg p-2 bg-gray w-[250px]'
        />
        <button
          onClick={onAdd}
          className='bg-gray text-red text-sm rounded-lg p-3 font-bold'
          disabled={disabled}
        >
          {buttonText}
        </button>
      </div>
    );
  };  