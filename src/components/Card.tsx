import { Link } from './Link';

interface Props {
  href: string;
  title: string;
  summary: string;
  img: string;
  imgAlt: string;
}

const Card = ({ href, title, img, summary, imgAlt }: Props) => {
  return (
    <li class='w-full flex flex-col gap-4'>
      <img class='object-cover h-40' src={img} alt={imgAlt} />
      <h2 class='font-medium text-2xl'>{title}</h2>
      <p class='text-sm'>{summary}</p>
      <Link href={href}>Press me!</Link>
    </li>
  );
};

export default Card;
