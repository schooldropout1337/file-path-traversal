# file-path-traversal 

![File Path Traversal Attack](https://github.com/schooldropout1337/file-path-traversal/blob/main/file_path_traversal_attack.png)

What is File Path Traversal?

File Path Traversal, also known as Directory Traversal or Path Manipulation, is a vulnerability that occurs when an attacker is able to navigate outside of the intended directory structure and access files or directories that should be restricted. It typically arises from insufficient input validation and sanitization. By exploiting this vulnerability, an attacker can potentially access sensitive system files, execute arbitrary commands, or perform unauthorized operations on the server. Preventing path traversal vulnerabilities requires careful handling of user input, proper validation, and robust file access controls to restrict access to intended resources.

Pentest App

The vulnerable Node.js app is an image upload functionality that lacks proper validation and sanitization. It allows users to upload images and access them via direct URLs. However, it suffers from security vulnerabilities including path traversal and potential XSS attacks. Attackers can manipulate filenames to traverse directories and access sensitive files, and there is a risk of injecting malicious code through the filenames.

PoC Video : https://youtu.be/PY_xavsLs-I
