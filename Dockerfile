FROM python
LABEL maintainer="rc8737n@pace.edu"
ADD . /assignment5
WORKDIR /assignment5
EXPOSE 5000
RUN pip install -r requirements.txt
ENTRYPOINT ["python", "docker.py"]