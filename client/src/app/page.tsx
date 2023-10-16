import Register from "@/components/ragister/page";
// import Image from "next/image";
export default function Home() {
  const Wrapper = ({
    children,
  }: {
    children: React.ReactNode;
  }): JSX.Element => {
    return <div className="w-[100%]">{children}</div>;
  };

  return (
    <Wrapper>
      <div>
        <Register />
      </div>
    </Wrapper>
  );
}
