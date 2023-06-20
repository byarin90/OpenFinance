import Th from "./th";

const TableHead = ({ cols }: { cols: string[] }) => {
  return (
    <thead className="border-b font-medium dark:border-neutral-500">
      <tr>
        {cols.map((col, index) => (
          <Th text={col} key={index} />
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
