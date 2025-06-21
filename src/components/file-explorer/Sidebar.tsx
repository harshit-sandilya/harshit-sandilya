interface SidebarProps {
  items: string[];
  selected: string;
  setSelected: (item: string) => void;
}

export default function Sidebar({
  items,
  selected,
  setSelected,
}: SidebarProps) {
  return (
    <div className="flex flex-col h-screen w-1/4 shadow-md">
      {items.map((item) => (
        <div
          key={item}
          onClick={() => setSelected(item)}
          className={`w-full items-center justify-center px-4 py-2 shadow-sm hover:bg-gray-100 transition-all duration-200 transform cursor-pointer ${
            selected === item ? "bg-gray-100" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
