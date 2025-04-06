import Avatar from '@/components/Instagram/Avatar';

const REVIEWS = [
  { id: 0, title: '기여한 일', name: 'contribution', icons_url: '/images/contribution.webp' },
  { id: 1, title: '문제점 및 아쉬운 점', name: 'problem', icons_url: '/images/problem.webp' },
  { id: 2, title: '문제 해결 및 성과', name: 'solve', icons_url: '/images/solve.webp' },
];

interface PostTypes {
  post: {
    contribution?: string[];
    problem?: string[];
    solve?: string[];
  };
}

function Reviews({ post }: PostTypes) {
  return (
    <ul className="flex flex-col gap-7">
      {REVIEWS.map(({ id, title, name, icons_url }) => {
        const data = post[name as keyof typeof post];
        if (!data) return null;

        return (
          <li key={id} className="flex w-full items-start justify-start gap-4">
            <Avatar imgURL={icons_url} name={title} />
            <div className="flex flex-col">
              <strong>{title}</strong>
              {data?.map((text, index) => (
                <div key={index}>
                  {index + 1}. {text}
                </div>
              ))}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Reviews;
