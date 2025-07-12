const FilterTabs = ({
  currentFilter,
  onChange,
}: {
  currentFilter: string;
  onChange: (f: string) => void;
}) => {
  const tabs = ["All", "Active", "Completed"];
  return (
    <div style={{ marginBottom: "20px" }}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          style={{
            padding: "8px 12px",
            marginRight: "10px",
            borderRadius: "4px",
            background: currentFilter === tab ? "#007bff" : "#eee",
            color: currentFilter === tab ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
