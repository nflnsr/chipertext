import { Link, useNavigate } from "react-router-dom";

function Member() {
  const navigate = useNavigate();

  const members = [
    {
      name: "Affalah Pramudia Sesutio",
      nim: "3337210069",
    },
    {
      name: "A'idah Eka Septiana",
      nim: "3337210063",
    },
    {
      name: "Andi Surya Priyadi",
      nim: "3337210017",
    },
    {
      name: "Fadel Najmi Adliansyah",
      nim: "3337210069",
    },
    {
      name: "Naufal Nasrullah",
      nim: "3337210037",
    },
  ];

  return (
    <main className="h-[calc(100svh)] text-gray-600 flex flex-col justify-center items-center">
      <h2 className="text-lg font-semibold text-orange-400 underline sm:text-xl">Members</h2>
      <ul className="space-y-1.5 pt-2 text-justify font-sans text-sm sm:text-lg font-semibold">
        {members.map((member) => (
          <>
            <li className="flex justify-between w-[280px] sm:w-[350px]">
              <p>{member.name}</p>
              <span>{member.nim}</span>
            </li>
          </>
        ))}
      </ul>
      <p className="pt-3">
        Repo :{" "}
        <Link
          to="https://github.com/nflnsr/chipertext"
          target="_blank"
          className="text-sm text-blue-400 sm:text-base hover:text-blue-500"
        >
          https://github.com/nflnsr/chipertext
        </Link>
      </p>
      <button onClick={() => navigate(-1)} className="px-10 mt-2 bg-gray-300 rounded pb-0.5 hover:bg-gray-200">Back</button>
    </main>
  );
}

export { Member };
