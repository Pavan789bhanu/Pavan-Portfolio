# This Dockerfile builds the FastAPI backend for deployment to AWS
# Lambda.  It leverages the AWS provided base image for Python
# runtimes, installs the required dependencies, and exposes the
# handler for the Mangum wrapper defined in main.py.

FROM public.ecr.aws/lambda/python:3.12

# Copy dependency definitions and install them.  Using
# --no-cache-dir reduces the layer size by preventing pip from
# caching wheels.
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code into the Lambda container.  We copy
# everything under backend which includes the API modules, core
# modules, and any additional data files.  The working directory is
# /var/task by default in AWS Lambda.
COPY . ./

# Specify the handler for AWS Lambda.  main.handler refers to
# the ``handler`` object in backend/main.py which wraps the
# FastAPI app using Mangum.
CMD ["main.handler"]