import  { useEffect, useState } from 'react';

interface RandomUserResponse {
  results: [
    {
      name: {
        title: string;
        first: string;
        last: string;
      };
      email: string;
      phone: string;
      picture: {
        large: string;
        medium: string;
        thumbnail: string;
      };
      location: {
        city: string;
        country: string;
      };
    },
  ];
}

async function getRandomUser(): Promise<RandomUserResponse> {
  const res = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
  if (!res.ok) {
    throw new Error('Failed to fetch user data');
  }
  return res.json();
}

export default function Home() {
  const [userData, setUserData] = useState<RandomUserResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRandomUser();
        setUserData(data);
      } catch (err) {
        console.log('Error fetching user data');
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const user = userData.results[0];

  return (
    <div className="w-[350px] bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full overflow-hidden">
            <img
              src={user.picture.large || '/placeholder.svg'}
              alt={`${user.name.first} ${user.name.last}`}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl text-gray-500 font-semibold">
              {user.name.title} {user.name.first} {user.name.last}
            </h2>
            <p className="text-sm text-gray-500">
              {user.location.city}, {user.location.country}
            </p>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-gray-500 text-sm">{user.email}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-gray-500 text-sm">{user.phone}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-gray-500 text-sm">
              {user.location.city}, {user.location.country}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}