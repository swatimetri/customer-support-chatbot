from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session as DBSession
from models import User, Session, Message
from database import SessionLocal, init_db
from pydantic import BaseModel
from datetime import datetime
import uuid
import requests
import os

app = FastAPI()

init_db()  # Create tables on startup

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
