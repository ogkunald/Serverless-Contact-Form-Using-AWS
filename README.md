# Serverless Contact Form for Static Websites using AWS Lambda SES and API Gateway



# Description
Static webpage script which sends data to your desired E-mail without using any Servers. It is mainly useful for contact Us form in static website like GithubPages or any static hosted webpages.

## Dependencies
1. AWS Lambda function
2. AWS SES
3. AWS API Gateway

### Tutorial
Go to Lambda Console
1. Create function and click on blueprint and choose any basic nodejs blueprint.
![LambdaCreate](https://github.com/nastyzera/Serverless-ContactForm-Using-AWS-Lambda-SES-And-API-Gateway/raw/master/Screenshots/LambdaFunction1.png)
2. Click on configure and choose **Create a new role with basic Lambda permissions** and click on function.
![LambdaCreate2](https://github.com/nastyzera/Serverless-ContactForm-Using-AWS-Lambda-SES-And-API-Gateway/raw/master/Screenshots/LambdaFunction2.png)
3. Now go to **Function code** and copy paste code from **LambdaFunction.js** from my GitHub repo.
![LambdaCreate3](https://github.com/nastyzera/Serverless-ContactForm-Using-AWS-Lambda-SES-And-API-Gateway/raw/master/Screenshots/LambdaFunction3.png)
4. Add your own email on Line 3 and 4 also edit data on Line 27 and 32 according to your form inputs.

Go to Simple Email Service(SES) console

5. Click on email address and complete verification process of your email id used above.

Go to IAM Management Console 
6. Click on Roles and you will see new role with multiple numbers and letters attached to it ,Click on it.
7. Click on attach policies and add **AmazonSESFullAccess** and **AWSLambdaExecute** policies.
![Roles](https://github.com/nastyzera/Serverless-ContactForm-Using-AWS-Lambda-SES-And-API-Gateway/raw/master/Screenshots/Roles.png)

Go to API Gateway console

8. Click on create API and Select REST API and in settings  add any API name and click on create API
![API1](https://github.com/nastyzera/Serverless-ContactForm-Using-AWS-Lambda-SES-And-API-Gateway/raw/master/Screenshots/API1.png)

Now we have to create Resource, Method, Stage, and deploy our function

9. Click on Actions and then Create Resources use any Resource name and check Enable API Gateway CORS.
10. Now click on Actions and then create Method choose POST check on Lambda Function for Integration type and for lambda function type lambda function name which was create earlier. Your screen should look like this
![API1](https://github.com/nastyzera/Serverless-ContactForm-Using-AWS-Lambda-SES-And-API-Gateway/raw/master/Screenshots/API2.png)
asddddddddddddddddddddd
8. Run the whole notebook (**Runtime > Run all**)
9. Follow directions there.

After download finishes the downloaded files will be in there in your drive in a folder named "**Experiment**"



### What is the purpose of it?
1. Since it is a Telegram bot ,you can access it from anywhere ,it will neither use your data or space.
2. Because of the Google Servers high download and upload speed ,you can stream torrents fast.
3. You can download torrent upto 75 gb without any problem.

# Screenshots
![TELEGRAMSS](https://github.com/nastyzera/Torrent-Drive-Telegram-Bot-Using-Colab/raw/master/Screenshots/TelegramBotScreenshot.jpeg)
![COLABSS](https://github.com/nastyzera/Torrent-Drive-Telegram-Bot-Using-Colab/raw/master/Screenshots/ColabScreenshot.jpeg)

### TODO
1. Concurrent torrent download
2. Progressbar of the download.
3. Cancel current download

# This whole repo is against Google Colab policy and you shouldn't be using it.
> **Why are hardware resources such as T4 GPUs not available to me?**
The best available hardware is prioritized for users who use Colaboratory interactively rather than for long-running computations. Users who use Colaboratory for long-running computations may be temporarily restricted in the type of hardware made available to them, and/or the duration that the hardware can be used for. We encourage users with high computational needs to use Colaboratory’s UI with a local runtime.
Please note that using Colaboratory for cryptocurrency mining is disallowed entirely, and may result in being banned from using Colab altogether.

<sub>Source: https://research.google.com/colaboratory/faq.html</sub>

### Maintained By : [Kunal Dongare](https://github.com/nastyzera)
