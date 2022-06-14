import { HTMLAttributes } from 'react';

interface Props {
    src: string | undefined;
}
const Video = ({ src }: Props) => {
    return (
        <div
            className="relative w-full duration-300 rounded-md overflow-hidden"
            style={{ paddingBottom: '55%' }}
        >
            <iframe
                className="absolute top-1/4 left-10 w-1/2 h-1/2 z-10"
                src={src}
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
};

export default Video;
