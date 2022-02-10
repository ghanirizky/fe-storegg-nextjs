import Link from "next/link";

interface LoginMenuProps {
  title: string;
  href: string;
}

const LoginMenu = (props: LoginMenuProps) => {
  const { title, href = "/" } = props;

  return (
    <li>
      <Link href={href}>
        <a className="dropdown-item text-lg color-palette-2">{title}</a>
      </Link>
    </li>
  );
};

export default LoginMenu;
