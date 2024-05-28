import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectUI = (props) => {
  const { title, items, onValueChange } = props;

  const handleChange = (val) => {
    onValueChange(val);
  };

  return (
    <Select onValueChange={(val) => handleChange(val)}>
      <SelectTrigger className="">
        <SelectValue placeholder={"Filter by " + title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {items.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectUI;
