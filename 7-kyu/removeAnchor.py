# Complete the function/method so that it returns the url with anything after the anchor (#) removed.

# Examples
# "www.codewars.com#about" --> "www.codewars.com"
# "www.codewars.com?page=1" -->"www.codewars.com?page=1"

def remove_url_anchor(url):
    if url.find("#") == -1:
        return url
    else:
        return url[:url.find("#")]




print(remove_url_anchor("www.codewars.com#about"))
print(remove_url_anchor("www.codewars.com?page=1"))