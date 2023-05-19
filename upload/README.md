# File Path Traversal 
# (../ or ..%2f or %2e%2e%2f)

The vulnerable Node.js app is an image upload functionality that lacks proper validation and sanitization. It allows users to upload images and access them via direct URLs. However, it suffers from security vulnerabilities including path traversal and potential XSS attacks. Attackers can manipulate filenames to traverse directories and access sensitive files, and there is a risk of injecting malicious code through the filenames.

PoC Video : https://youtu.be/PY_xavsLs-I
