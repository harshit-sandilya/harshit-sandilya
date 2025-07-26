export default function Switch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      <div className="w-14 h-8 bg-gray-200 rounded-full peer peer-focus:outline-none peer-checked:bg-blue-400"></div>
      <div className="absolute top-[4px] left-[4px] bg-white shadow-md rounded-full h-6 w-6 transition-all peer-checked:translate-x-full"></div>
    </label>
  );
}
