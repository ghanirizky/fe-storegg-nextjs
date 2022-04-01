interface ListItemProps {
  desc: string;
}

const ListItem = (props: ListItemProps) => {
  const { desc } = props;
  return (
    <li className="mb-6">
      <a href="" className="text-lg color-palette-1 text-decoration-none">
        {desc}
      </a>
    </li>
  );
};

export default ListItem;
