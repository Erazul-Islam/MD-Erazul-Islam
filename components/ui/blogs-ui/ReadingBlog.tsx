/* eslint-disable prettier/prettier */
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function ReadingBlog() {

    const blogs = [
        {
            id: 1,
            name: "AI Interview",
            image: "https://res.cloudinary.com/djs5y6ey5/image/upload/v1734875172/DALL_E_2024-11-24_18.39.21_-_A_professional_setting_showing_a_job_interview_involving_artificial_intelligence._The_scene_includes_a_futuristic_AI_robot_with_a_sleek_and_humanoid_a_j2azpc.webp",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7266433136991830017",
            description: "Have you ever heard AI interview?.."
        },
        {
            id: 2,
            name: "Next js",
            image: "https://res.cloudinary.com/djs5y6ey5/image/upload/v1734875086/DALL_E_2024-12-07_13.43.42_-_A_sleek_and_modern_illustration_representing_Next.js_development._The_scene_includes_a_futuristic_workspace_with_a_glowing_computer_screen_displaying_uu3ymc.webp",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7271070061983875072",
            description: "Exploring the Power of Next.js.."
        },
        {
            id: 3,
            name: "React js",
            image: "https://res.cloudinary.com/djs5y6ey5/image/upload/v1734875210/1733424498446_byxjd7.jpg",
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
