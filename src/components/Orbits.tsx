const Orbits = () => {
    const orbitsCount = 8;
    const maxOrbitsHeight = 400;
    const orbitThickness = maxOrbitsHeight / orbitsCount;

    return (
        <div className="border border-white p-2 flex flex-col">
            This is the Star System
            <div className="relative w-full h-[400px] overflow-hidden">
                {[...Array(orbitsCount)].map((_, index) => (
                    <div
                        key={index}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"
                        style={{
                            width: `${maxOrbitsHeight - index * orbitThickness}px`,
                            height: `${maxOrbitsHeight - index * orbitThickness}px`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Orbits;