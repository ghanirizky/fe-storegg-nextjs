import cx from "classnames";
import { onImageErr } from "../../../helper";
import FormatRupiah from "../../atoms/FormatRupiah";

interface TableRowItemProps {
  icon: string;
  game: string;
  category: string;
  item: string;
  price: number;
  status: "pending" | "success" | "failed";
}

const TableRowItem = (props: TableRowItemProps) => {
  const { icon, game, category, item, price, status } = props;
  const classStatus = cx("float-start icon-status", status.toLowerCase());

  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`${process.env.NEXT_PUBLIC_IMG}/${icon}`}
          width={80}
          height={60}
          alt="thumbnail"
          onError={({ currentTarget }) => onImageErr(currentTarget, "game")}
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
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          <FormatRupiah nominal={price} />
        </p>
      </td>
      <td>
        <div>
          <span className={classStatus}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative trans-status">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default TableRowItem;
