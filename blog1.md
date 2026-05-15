## Blog of "any" and "unknown"

Using any is a safety because it tells the compiler to ignore type checking, leading to potential runtime crashes. unknown is the safer alternative; it requires type narrowing (like typeof checks) before you can operate on the data, ensuring your code handles unpredictable input safely.