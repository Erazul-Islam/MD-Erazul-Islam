/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";
import { TextRevealCard} from "@/components/ui/about-ui/text-reveal";



export function TextRevealCardPreview() {
    return (
        <div className=" h-[40rem] rounded-2xl w-full">
            <TextRevealCard
                text="You know the business"
                revealText="I know the chemistry "
            >
                
            </TextRevealCard>
        </div>
    );
}
