import Image from "next/image";
import Link from "next/link";
import ErrorImg from "../assets/404-best2.gif";

const notFound = () => {
  return (
    <div
      className="text-center flex justify-center items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <Image
          src={ErrorImg}
          width={600}
          height={200}
          className="img-fluid inline"
          alt=""
        />

        <h1 className="py-1 text-3xl	">404 - Page Not Found</h1>
        <p style={{ width: "40%", margin: "auto" }}>
          Unfortunately the page you were looking for could not be found. It may
          be temporarily unavailable, moved or no longer exist. Check the Url
          you entered for any mistakes and try again.
        </p>
        <button>
          <Link href="/">
            <button className="btn bg-blue-500 text-white mt-2">
              Back to Home
            </button>{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default notFound;
