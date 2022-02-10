import cx from "classnames";

interface TableRowItemProps {
  icon: "overview-1" | "overview-2" | "overview-3" | "overview-4";
  game: string;
  category: "Desktop" | "Mobile";
  item: number;
  price: number;
  status: "Pending" | "Success" | "Failed";
}

const TableRowItem = (props: TableRowItemProps) => {
  const { icon, game, category, item, price, status } = props;
  const classStatus = cx("float-start icon-status", status.toLowerCase());

  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${icon}.png`}
          width={80}
          height={60}
          alt="thumbnail"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {game}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={classStatus}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default TableRowItem;
