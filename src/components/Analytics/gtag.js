const Analytics = () => {
    <>
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-345210624"
        />
        
        <script dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'AW-345210624');
        `}}/>
    </>
}

export default Analytics