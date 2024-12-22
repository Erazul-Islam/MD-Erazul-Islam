/* eslint-disable prettier/prettier */
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function ReadingBlog() {

    const blogs = [
        {
            id: 1,
            name: "AI Interview",
            image: "https://i.ibb.co.com/8sK09yL/DALL-E-2024-11-24-18-39-21-A-professional-setting-showing-a-job-interview-involving-artificial-intel.webp",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7266433136991830017",
            description: "Have you ever heard AI interview?.."
        },
        {
            id: 2,
            name: "Next js",
            image: "https://i.ibb.co.com/1TtkxcB/DALL-E-2024-12-07-13-43-42-A-sleek-and-modern-illustration-representing-Next-js-development-The-scen.webp",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7271070061983875072",
            description: "Exploring the Power of Next.js.."
        },
        {
            id: 3,
            name: "React js",
            image: "https://i.ibb.co.com/LR2yb2Y/1733424498446.jpg",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7270509314631450626/",
            description: "React js , the javaScript library,.."
        }
    ]

    return (
        <div className=" lg:ml-[230px] gap-4 ml-12 grid mt-4 lg:mr-[140px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map((one) => (<Card key={one.id} isFooterBlurred className="w-[350px] h-[350px] ">
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src={one.image}
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-center font-serif text-xl">{one.name}</p>
                            <p className="text-black text-tiny">{one.description}</p>
                        </div>
                        <Link href={one.link}>
                            <Button className="text-tiny" color="danger" radius="md" size="sm">
                                    Read 
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>))
            }
        </div>
    );
}
