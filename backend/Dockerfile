FROM public.ecr.aws/lambda/python:3.12

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy app code
COPY app/ ${LAMBDA_TASK_ROOT}/app/

# Set the handler
CMD ["app.main.handler"]
