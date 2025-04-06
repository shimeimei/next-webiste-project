// import Image from "next/image";
type ButtonProps = {
  name?: string;
};
export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton name="aa" />
    </div>
  );
}
function MyButton({ name = "button" }: ButtonProps) {
  return <button className="bg-sky-500 hover:bg-sky-700 w-300">{name}</button>;
}
