import FormatRupiah from "../../atoms/FormatRupiah";

interface DetailRowProps {
  label: string;
  value: string | number;
  className?: string;
}

const DetailRow = (props: Partial<DetailRowProps>) => {
  const { label, value, className } = props;
  return (
    <>
      <p className="text-lg color-palette-1 mb-20">
        {label}{" "}
        <span className={`purchase-details ${className}`}>
          {typeof value == "number" ? (
            <FormatRupiah nominal={value} />
          ) : (
            value
          )}
        </span>
      </p>
    </>
  );
};

export default DetailRow;
