module.exports=
{
    show(file,req)
    {
        console.log(`
            wyslano: ${file}
            protocol: ${req.protocol}
            secure: ${req.secure}
            url: ${req.url}
            path: ${req.path}
            ip: ${req.ip}
            `);
    }
}