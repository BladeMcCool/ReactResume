set -e
docker build -t gcr.io/astute-backup-434623-h3/react-app:latest .
docker push gcr.io/astute-backup-434623-h3/react-app:latest
gcloud run deploy react-app --image gcr.io/astute-backup-434623-h3/react-app:latest --platform managed --region us-central1 --no-allow-unauthenticated --port 80
