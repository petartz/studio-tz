const Biography = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <p className="mx-4 mb-6 text-xs md:m-auto md:p-16 lg:m-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
         It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
         containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
         including versions of Lorem Ipsum.
        </p>
        <img className="biopic m-auto" src="https://i.imgur.com/A3Vtb2k.jpg" alt="petar-biopic" title="source: imgur.com" />
      </div>
    </div>
  )
}

export default Biography