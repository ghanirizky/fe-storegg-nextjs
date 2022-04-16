import Link from "next/link";
import FormatRupiah from "../../atoms/FormatRupiah";

interface TableRowProps {
  image: string;
  title: string;
  category: string;
  item: string;
  price: number;
  status: "pending" | "success" | "failed";
  id : string
}

const TableRow = (props: TableRowProps) => {
  const { image, title, category, item, price, status, id} = props;

  return (
    <>
      <tr data-category={status.toLowerCase()} className="align-middle">
        <th scope="row">
          <img
            className="float-start me-3 mb-lg-0 mb-3"
            src={`${process.env.NEXT_PUBLIC_IMG}/${image}`}
            width="80"
            height="60"
            alt=""
          />
          <div className="game-title-header">
            <p className="game-title fw-medium text-start color-palette-1 m-0">
              {title}
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
          <p className="fw-medium color-palette-1 m-0">
            <FormatRupiah nominal={price} />
          </p>
        </td>
        <td>
          <div>
            <span className={`float-start icon-status ${status}`}></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative trans-status">
              {status}
            </p>
          </div>
        </td>
        <td>
          <Link href={`/member/transactions/${id}`}>
            <a className="btn btn-status rounded-pill text-sm">Details</a>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
