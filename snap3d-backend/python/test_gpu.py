import torch
import time
print(f"CUDA Available: {torch.cuda.is_available()}")
print(f"Device: {torch.cuda.get_device_name(0)}")
print(f"VRAM: {torch.cuda.get_device_properties(0).total_memory / 1024**2:.2f} MB")
model = torch.hub.load("intel-isl/MiDaS", "MiDaS_small").to("cuda").eval()
img = torch.rand(1, 3, 384, 512).to("cuda")
start_time = time.time()
with torch.no_grad():
    for _ in range(10):  # Simulate multiple inferences
        depth = model(img)
print(f"Depth estimation (10 runs) took {time.time() - start_time:.2f} seconds on GPU")