# Play - Free Tailwind CSS Template for Startup, Apps and SaaS

Play is an open-source and free Tailwind CSS template co-created by TailGrids and UIdeck. This template specially crafted for SaaS, startup, business and software website.
Play crafted in a way that you can use with almost all sort of web project. This is Tailwind CSS version of our old [Bootstrap](https://preview.uideck.com/items/play-bootstrap/) project.

### This template crafted using 🥞 [TailGrids](https://tailgrids.com/) UI components


### [🚀 View Demo](https://play-tailwind.tailgrids.com/)

### [⬇️ Download Now](https://links.tailgrids.com/play-download)

[![play-tailwind](https://cdn.tailgrids.com/play-tailwind.jpg)](https://play-tailwind.tailgrids.com/)



## 📃 License
Play is an open-source template, you can use it with your personal or commercial projects without any attribution or backlink.

## 💙 Support
You can always support this project by [Starring🌟 This Repository](https://github.com/tailgrids/play-tailwind) 
and sharing with friends. Also open an issue if you find bug or feel free to contribute by pull requests after fixing any issue or adding more values.


## Recomplie the css & watch
npx tailwindcss -i src/tailwind.css -o assets/css/tailwind.css --watch

## Send E-Mail Deployment
sam package --template-file template.yaml --output-template-file packaged.yaml --s3-bucket cdk-hnb659fds-assets-172861630355-us-east-1 && sam deploy --template-file packaged.yaml --stack-name SendEmail --capabilities CAPABILITY_IAM