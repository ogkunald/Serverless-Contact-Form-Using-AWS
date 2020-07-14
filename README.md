# Serverless Contact Form for Static Websites using AWS Lambda SES and API Gateway



# Description
Static webpage script which sends data to your desired E-mail without using any Servers. It is mainly useful for contact Us form in static website like GithubPages or any static hosted webpages.

## Dependencies
1. AWS Lambda function
2. AWS SES
3. AWS API Gateway

## Tutorial

### AWS 
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

8. Click on create API and Select **REST API** and in settings  add any API name and click on create API

![API1](https://github.com/nastyzera/Serverless-ContactForm-Using-AWS-Lambda-SES-And-API-Gateway/raw/master/Screenshots/API1.png)

Now we have to create Resource, Method, Stage, and deploy our function

9. Click on Actions and then **Create Resources** use any Resource name and check Enable API Gateway CORS.
10. Now click on Actions and then **Create Method** choose **POST** check on Lambda Function for Integration type and for lambda function type lambda function name which was create earlier. Your screen should look like this-
![API2](https://github.com/nastyzera/Serverless-ContactForm-Using-AWS-Lambda-SES-And-API-Gateway/raw/master/Screenshots/API2.png)

10. Click on Actions and then Enable CORS and under **Access-Control-Allow-Origin** use your Website/WebPage **URL(without / at the end)** and Click on Enable CORS and replace existing CORS headers

11. Click on Action and then **Deploy API** and Create new stage with any name and click on Deploy.
12. Click on **POST** and copy **Invoke URL**

### Website Script part

1. Add script from **nastycontactscript.js** from my Repo into head part of your HTML file or if you are using specific js file for Javascript then paste into that
2. Make changes on Line 3,4 and 5 and if you are using more fields then  create variable and do add their id into that.
3. Done

## Screenshots

![ContactPage](https://github.com/nastyzera/Serverless-ContactForm-Using-AWS-Lambda-SES-And-API-Gateway/raw/master/Screenshots/contact.png)

![Result](https://github.com/nastyzera/Serverless-ContactForm-Using-AWS-Lambda-SES-And-API-Gateway/raw/master/Screenshots/last.png)

### TODO
1. Send Confirmation Email to users email


### Maintained By : [Kunal Dongare](https://github.com/nastyzera)


