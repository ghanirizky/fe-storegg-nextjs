import ListItem from "./ListItem";

interface FooterListProps {
  title: string;
  list: Array<string>;
}

const FooterList = (props: FooterListProps) => {
  const { title, list } = props;

  return (
    <>
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {list.map((desc) => {
          return <ListItem desc={desc} />;
        })}
      </ul>
    </>
  );
};

export default FooterList;
