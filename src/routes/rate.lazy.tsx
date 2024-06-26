import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Likes } from "~/assets/Likes.tsx";

export const Rate = () => {
  const [ratingType, setRatingType] = useState("users");

  return (
    <div
      style={{
        background: "#e5e7eb",
        height: "100vh",
        padding: "18px",
        color: "black",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        overflow: "scroll",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div
            onClick={() => setRatingType("users")}
            className={`button ${ratingType === "users" ? "active" : ""}`}
          >
            Users
          </div>
          <div
            onClick={() => setRatingType("companies")}
            className={`button ${ratingType === "companies" ? "active" : ""}`}
          >
            Companies
          </div>
        </div>
        <div style={{ flexDirection: "column", display: "flex", gap: 8 }}>
          <div>
            <div
              style={{
                display: "flex",
                padding: 16,
                background: "white",
                borderRadius: 12,
                alignItems: "center",
                gap: 16,
                height: 76,
              }}
            >
              <div style={{ fontSize: 17, color: "#707579" }}>1</div>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="ava.jpg" />
                  </div>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 600 }}>
                      FollowDragons
                    </div>
                    <a
                      style={{ fontSize: 16, fontWeight: 600 }}
                      className="text-blue-500"
                    >
                      @Dragon_TON
                    </a>
                  </div>
                </div>
              </div>
              <Likes count={134} />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                padding: 16,
                background: "white",
                borderRadius: 12,
                alignItems: "center",
                gap: 16,
                height: 76,
              }}
            >
              <div style={{ fontSize: 17, color: "#707579" }}>2</div>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="ava.jpg" />
                  </div>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 600 }}>
                      FollowDragons
                    </div>
                    <a
                      style={{ fontSize: 16, fontWeight: 600 }}
                      className="text-blue-500"
                    >
                      @Dragon_TON
                    </a>
                  </div>
                </div>
              </div>
              <Likes count={100} />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                padding: 16,
                background: "white",
                borderRadius: 12,
                alignItems: "center",
                gap: 16,
                height: 76,
              }}
            >
              <div style={{ fontSize: 17, color: "#707579" }}>3</div>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="ava.jpg" />
                  </div>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 600 }}>
                      FollowDragons
                    </div>
                    <a
                      style={{ fontSize: 16, fontWeight: 600 }}
                      className="text-blue-500"
                    >
                      @Dragon_TON
                    </a>
                  </div>
                </div>
              </div>
              <Likes count={80} />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                padding: 16,
                background: "white",
                borderRadius: 12,
                alignItems: "center",
                gap: 16,
                height: 76,
              }}
            >
              <div style={{ fontSize: 17, color: "#707579" }}>4</div>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="ava.jpg" />
                  </div>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 600 }}>
                      FollowDragons
                    </div>
                    <a
                      style={{ fontSize: 16, fontWeight: 600 }}
                      className="text-blue-500"
                    >
                      @Dragon_TON
                    </a>
                  </div>
                </div>
              </div>
              <Likes count={70} />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                padding: 16,
                background: "white",
                borderRadius: 12,
                alignItems: "center",
                gap: 16,
                height: 76,
              }}
            >
              <div style={{ fontSize: 17, color: "#707579" }}>5</div>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="ava.jpg" />
                  </div>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 600 }}>
                      FollowDragons
                    </div>
                    <a
                      style={{ fontSize: 16, fontWeight: 600 }}
                      className="text-blue-500"
                    >
                      @Dragon_TON
                    </a>
                  </div>
                </div>
              </div>
              <Likes count={60} />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                padding: 16,
                background: "white",
                borderRadius: 12,
                alignItems: "center",
                gap: 16,
                height: 76,
              }}
            >
              <div style={{ fontSize: 17, color: "#707579" }}>6</div>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="ava.jpg" />
                  </div>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 600 }}>
                      FollowDragons
                    </div>
                    <a
                      style={{ fontSize: 16, fontWeight: 600 }}
                      className="text-blue-500"
                    >
                      @Dragon_TON
                    </a>
                  </div>
                </div>
              </div>
              <Likes count={50} />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                padding: 16,
                background: "white",
                borderRadius: 12,
                alignItems: "center",
                gap: 16,
                height: 76,
              }}
            >
              <div style={{ fontSize: 17, color: "#707579" }}>7</div>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="ava.jpg" />
                  </div>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 600 }}>
                      FollowDragons
                    </div>
                    <a
                      style={{ fontSize: 16, fontWeight: 600 }}
                      className="text-blue-500"
                    >
                      @Dragon_TON
                    </a>
                  </div>
                </div>
              </div>
              <Likes count={40} />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                padding: 16,
                background: "white",
                borderRadius: 12,
                alignItems: "center",
                gap: 16,
                height: 76,
              }}
            >
              <div style={{ fontSize: 17, color: "#707579" }}>8</div>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img src="ava.jpg" />
                  </div>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 600 }}>
                      FollowDragons
                    </div>
                    <a
                      style={{ fontSize: 16, fontWeight: 600 }}
                      className="text-blue-500"
                    >
                      @Dragon_TON
                    </a>
                  </div>
                </div>
              </div>
              <Likes count={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute("/rate")({
  component: Rate,
});
