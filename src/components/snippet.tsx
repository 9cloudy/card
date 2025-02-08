import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `import { useEffect, useState } from 'react';

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

export default function RandomUserCard() {
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
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  const user = userData.results[0];

  return (
    <div className="w-[350px] bg-white rounded-lg shadow-lg overflow-hidden p-6">
      <SyntaxHighlighter language="typescript" style={tomorrowNight}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}`;

export default function CodeSnippet() {
  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
      <SyntaxHighlighter language="typescript" style={atomDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}