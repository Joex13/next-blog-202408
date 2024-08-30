import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

type Props = {
  title: string
  img: string
  description?: string
  content?: string
  tags?: string[]
}

export default function ArticleCard(props: Props) {
  return (
    <Card className=" bg-[rgba(0,0,0,0.03)] dark:bg-[rgba(0,0,0,0.1)]">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={props.img}
          alt={"//省略させてくれ"}
          width={300}
          height={250}
        />
        <p>{props.content}</p>
      </CardContent>
      <CardFooter>
        <ul className="flex gap-2">
          <li>タグとかいれる予定</li>
          <li>です</li>
        </ul>
      </CardFooter>
    </Card>
  )
}
