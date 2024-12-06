export default function Window({ src, rel, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="relative p-4 bg-white rounded shadow-xl">
                <button onClick={onClose} className="absolute top-0 right-0 m-2 text-black">
                    &times;
                </button>
                <img src={src} alt={rel} className="max-w-full h-auto" />
                <p className="mt-2 text-center">{rel}</p>
            </div>
        </div>
    );
}
