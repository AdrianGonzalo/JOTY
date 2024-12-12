export default function Window({ src, rel, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[orange] bg-opacity-65">
            <div className="relative p-4 bg-white rounded shadow-xl w-[600px] h-[280px] border-[orange] border-4">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <p className="w-[550px] text-center p-6 text-lg">Congratulations <span className="text-[orange]">Soldier</span> for your incredible actions, from here the Overwatch 2 community wants to gift you with your beloved JOTY, enjoy it</p>
                    <button onClick={onClose} className="text-4xl absolute top-0 right-0 m-2 text-[orange]">
                        &times;
                    </button>
                    <img src={src} alt={rel} className="max-w-full h-auto" />
                    <p className="mt-5 text-center text-xl">{rel}</p>
                </div>
            </div>
        </div>
    );
}
