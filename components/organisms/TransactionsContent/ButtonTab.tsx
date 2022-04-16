import cx from "classnames";

interface ButtonTabProps {
  title: string;
  active?: boolean;
  onClick: () => void;
}

const ButtonTab = (props: Partial<ButtonTabProps>) => {
  const { title, active, onClick } = props;
  const btnClass = cx({
    "btn btn-status rounded-pill text-sm  me-3": true,
    "btn-active": active,
  });

  return (
    <button type="button" onClick={onClick} data-filter="*" className={btnClass}>
      {title}
    </button>
  );
};

export default ButtonTab;
