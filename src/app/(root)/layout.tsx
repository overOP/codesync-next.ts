import StreamClientProvider from "@/components/providers/StreamClientProvider";

const layout = ({ children }: { children: React.ReactNode }) => {
    return <StreamClientProvider>{children}</StreamClientProvider>;
}

export default layout