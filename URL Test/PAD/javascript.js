const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const Paragraphs = entry.target.querySelector('.Paragraph-blocks');
  
      if (entry.isIntersecting) {
        Paragraph-blocks.classList.add('slidein');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      Paragraph-blocks.classList.remove('slidein');
    });
  });
  
  observer.observe(document.querySelector('.Paragraphs'));