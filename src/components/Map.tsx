const Map = () => {
    return (
        <div className="bg-gray-300 text-center">
            <iframe
                src="https://maps.google.com.br/maps?q=B2+Frotas+-+Personalização+de+Frotas&output=embed"
                allowFullScreen
                loading="lazy"
                className='w-full'
                height={300}
            ></iframe>
        </div>
    )
}

export default Map;