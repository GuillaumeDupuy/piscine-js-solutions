function reverse(source)
{
    if(typeof source === "string")
    {
        let result = "";
        for(let i = source.length - 1; i >= 0; i--)
        {
            result += source[i];
        }
        return result;
    }

    else if(typeof source === "object")
    {
        let result = [];
        for(let i = source.length - 1; i >= 0; i--)
        {
            result.push(source[i]);
        }
        return result;
    }
}